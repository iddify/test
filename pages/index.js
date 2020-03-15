import Chart from "../component/Chart";
import Hint from "../component/Hint";
import fetch from "node-fetch";
import Head from "next/head";

function HomePage({ status }) {
  const { confirmed, recovered, deaths } = status[0];

  return (
    <div className='main'>
      <Head>
        <title>آخر احصائيات الرصد الصحي لفيروس كورونا بالمغرب'</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='header'>
        <h1 className='header_title'>فيروس كورونا المستجد</h1>
        <span className='header_subtitle'>حصيلة الرصد الصحي بالمغرب</span>
      </div>
      {status ? (
        <div className='chart__wrapper'>
          <Chart status={status[0]} />
          <div>
            <Hint title='الحالات المؤكدة' value={confirmed} color='#003CBF' />
            <Hint title='المتعافون' value={recovered} color='#06CAFD' />
            <Hint title='الوفيات' value={deaths} color='#FF5C4D' />
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

HomePage.getInitialProps = async ctx => {
  const res = await fetch(
    "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=MA"
  );
  const json = await res.json();
  return { status: json };
};
export default HomePage;
