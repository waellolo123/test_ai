import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import {OpenAI} from "openai";
import Configuration from "openai";
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAI(configuration);

export async function POST(req){
  try {
    const {userId} = auth();
    const body = await req.json();
    const {prompt, amount=1, resolution="512x512"} = body;
    if(!userId){
      return new NextResponse("Unauthorized", {status: 401});
    }
    if(!configuration.apiKey){
      return new NextResponse("OpenAi API key not configured", {status: 500});
    }
    if(!prompt){
      return new NextResponse("prompt are required", {status: 400});
    }
    if(!amount){
      return new NextResponse("amount are required", {status: 400});
    }
    if(!resolution){
      return new NextResponse("resolution are required", {status: 400});
    }
    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();
    if(!freeTrial && !isPro){
      return new NextResponse("You have exceeded your API limit for this month.",{ status : 403});
    }
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: "a white siamese cat",
      n: 1,
      size: "1024x1024",
    });
    if(!isPro){
      await increaseApiLimit();
    }
    image_url = response.data.data[0].url;
    return NextResponse.json(image_url);
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Internal error", {status: 500});
  }
}


