import { getIndustryInsight } from '@/actions/dashboard';
import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';
import DashboardView from './_components/Dashboard-view';


const IndustryInsightPage = async() => {
  const { isOnboarded } = await getUserOnboardingStatus();
  const insights = await getIndustryInsight();
        
         if ( !isOnboarded ) {
          redirect("/onboarding");
         }
  return (
    <div className='conatiner mx-auto'>
      <DashboardView insights={insights}/>
    </div>
  )
}

export default IndustryInsightPage
