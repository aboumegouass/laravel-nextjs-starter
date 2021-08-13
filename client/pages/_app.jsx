import "../styles/globals.css";

//import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import '../src/css/app.css'
import store from "@/store/store";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { AuthGuard } from "@/services/Auth/AuthGuard";
import { useEffect, useState } from "react";
import * as types from "@/store/actionTypes";
import TagManager from "react-gtm-module";
import { useRouter } from "next/router";
import { protectedRoutes } from "../config/config";

// Include Layouts
import Navbar from "@/layouts/Navbar/"
import RightSidebar from "@/layouts/Sidebar/RightSidebar"

import LeftSidebar from "@/layouts/Sidebar/LeftSidebar";

require("./../config/config.tsx");

function MyApp(props) {
    // Initialize Google Tag Manager via react-gtm-module.
    if (process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID) {
        const tagManagerArgs = {
            gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
        };
        if (process.browser) {
            TagManager.initialize(tagManagerArgs);
        }
    }

    const router = useRouter();
    // Check if we're on a protected route.
    const isNoProtectedRoute = protectedRoutes.every((route) => {
        return !router.pathname.startsWith(route);
    });

    // Handle current user in redux.
    useEffect(() => {
        // Store current user if we have one.
        if (props.user) {
            store.dispatch({
                type: types.USER_LOADED,
                payload: props.user,
            });
            return;
        }
        // Dispatch user loading error if no user is present.
        store.dispatch({
            type: types.USER_LOADED_ERROR,
        });
    }, []);

    const [isShowen, setIsShowen] = useState(false)
    const [isDarken, setIsDarken] = useState(true)
    const ToggleSidebarHandle = (newVal) => {
        setIsShowen(!newVal)
    }
    const ToggleDarkenHandle = (newVal) => {
        setIsDarken(!newVal)
    }
    const firstPath = props.router.route.split("/")
    return (

        <Provider store={store}>
            <div className={"app-wrapper" + (isDarken ? '' : ' is-darken')}>

                {(firstPath[1] !== 'user') ?
                    <Navbar
                        ToggleDarkenHandle={ToggleDarkenHandle}
                        isDarken={isDarken}
                        ToggleSidebarHandle={ToggleSidebarHandle}
                        isShowen={isShowen}
                        isLoggedIn={true}
                    />
                    : ''}
                <div className={(firstPath[1] !== 'user') ? "app-row" : ''}>

                    {(firstPath[1] !== 'user') ?
                        <div className={"app-sidebar" + (isShowen ? '' : ' is-show')}>
                            <div className="app-sidebar-inner position-sticky" style={{ top: 75 }}>
                                <RightSidebar />
                            </div>
                        </div>
                        : ''}
                    <div className={((firstPath[1] !== 'user') ? ("app-content" + (!isShowen ? '' : ' is-full-width')) : '')}>
                        <props.Component {...props.pageProps} />
                    </div>

                    {(firstPath[1] !== 'user') ?
                        <div className="app-left-sidebar">
                            <LeftSidebar />
                        </div>
                        : ''}
                </div>
                {/* {isNoProtectedRoute && <AdvancedFooter />} */}
            </div>
        </Provider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.object,
};

/**
 * Fetch some data server side before rendering the page client side.
 *
 * @param {object} context
 *   The context object.
 */
MyApp.getInitialProps = async ({ ctx }) => {
    const req = ctx.req;
    const pathname = ctx.pathname;
    const res = ctx.res;

    /**
     * Abort if one var is not present.
     * For example, the req obj will be undefined if we don't
     * have a page reload but a page switch via the Next Router.
     */
    if (!req || !pathname || !res) {
        return {};
    }

    const authenticator = new AuthGuard();
    return await authenticator.authenticateUser(req, res, pathname);
};

export default MyApp;
