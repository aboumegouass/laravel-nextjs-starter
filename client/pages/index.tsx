/*
|--------------------------------------------------------------------------
| The home page.
|--------------------------------------------------------------------------
|
| The home page of your application.
|
*/
import Head from "next/head";
import Link from "next/link";
import SubNav from "@/layouts/contents/SubNav";
import Posts from "@/layouts/contents/Posts";
import Communities from "@/layouts/Communities";

function Home() {
    return (
        <>
            <Head>
                <title>فارزة - مجتمع للأسئلة والأجوبة</title>
            </Head>
            <div className="app-site-content">
                <div className="p-3">
                    <SubNav />
                    <Communities />
                    <Posts />
                </div>

            </div>
        </>
    );
}

export default Home;
