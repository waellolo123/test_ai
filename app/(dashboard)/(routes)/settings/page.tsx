import Heading from '@/components/Heading'
import SubsciptionButton from '@/components/SubsciptionButton'
import { checkSubscription } from '@/lib/subscription'
import { Settings } from 'lucide-react'
import React from 'react'

const SettingsPage = async () => {
 const isPro = await checkSubscription();

  return (
    <div>
      <Heading 
       title='Settings'
       description='Manage account settings'
       icon={Settings}
       iconColor='text-gray-700'
       bgColor='bg-gray-700/10'
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
         {isPro ? "You are currently on a pro plan" : "you are currently in free plan"}
        </div>
        <SubsciptionButton isPro={isPro} />
      </div>
    </div>
  )
}

export default SettingsPage;

