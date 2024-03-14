import HomeCategories from '@/modules/home/Categories'
import HomeForumList from '@/modules/home/ForumList'
import HomePolularHashTags from '@/modules/home/PopularHashTags'
import HomeTopCard from '@/modules/home/TopCard'

export default function Home(){
    return(
    <>
    <main
        className="bx-def-color-bg-page min-h-screen"
        suppressHydrationWarning
      >
        <div className="flex flex-col max-w-[1440px] p-6 gap-6 mx-auto">
          {/* hot topics*/}
          <div className="flex gap-3">
            <HomeTopCard
              title={'Pro Apps for Free?'}
              description={`The 13.1 update is imminent,
             and along with the framework changes we are preparing some platform changes, too.
             I'll elaborate on specifics in the next few days, but for now I'd like to discuss one question....We think about making all...`}
              href={'/thread'}
              coverImgUrl={''}
              userName="Andrey Yasko"
              userImageUrl="/img/userImg01.jpg"
              updateTime={'29 Aug 2023'}
              replies={28}
            />

            <HomeTopCard
              title={'Introducing Test Automation for UNA! '}
              description={``}
              href={'/thread'}
              coverImgUrl={'/img/coverImg01.png'}
              userName="Igor Lebedev"
              updateTime={'17 Aug 2023'}
              replies={2}
            />

            <HomeTopCard
              title={
                'Want to learn about your use cases of running a community management system '
              }
              description={``}
              href={'/thread'}
              coverImgUrl={'/img/coverImg02.jpg'}
              userName="thomlin"
              userImageUrl="/img/userImg01.jpg"
              updateTime={'4 May 2021'}
              replies={4}
            />

            <HomeTopCard
              title={'Magic'}
              description={`Here is some magic straight from #unalab ... Watch carefully and consider the potential.
               😁Hint: it's bigger than any other feature we have ever added 🤓`}
              href={'/thread'}
              coverImgUrl={''}
              userName="Andrey Yasko"
              userImageUrl="/img/userImg01.jpg"
              updateTime={'22 Nov 2019'}
              replies={43}
            />
          </div>

          {/* categories and thread */}
          <div className="flex gap-3">
            {/* categories */}
            <div className="flex flex-col gap-6 w-1/3">
              <HomeCategories />
              <HomePolularHashTags />
            </div>

            {/* threads  */}
            <div className="flex flex-col gap-6 w-2/3">
              <HomeForumList />
            </div>
          </div>
        </div>
      </main>

    </>)
}