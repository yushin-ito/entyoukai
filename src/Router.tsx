import { VStack } from "@chakra-ui/react";
import { lazy, Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation,
  useNavigate
} from "react-router-dom";

import ProgressBar from "./components/molecules/ProgressBar";
import Footer from "./components/organisms/Footer";
import MainVisual from "./components/organisms/MainVisual";
import { useLoading } from "./contexts";
import useScroll from "./hooks/tools";

const Top = lazy(() => import("./pages/Top"));
const Activity = lazy(() => import("./pages/Activity"));
const Article = lazy(() => import("./pages/Article"));
const Sponsor = lazy(() => import("./pages/Sponsor"));
const Contact = lazy(() => import("./pages/Contact"));
const Memory = lazy(() => import("./pages/Memory"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const SitePolicy = lazy(() => import("./pages/SitePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Error = lazy(() => import("./pages/Error"));

const Fallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/error");
  }, [navigate]);

  return null;
};

const Layout = () => {
  const { pathname } = useLocation();

  const { scrollToElement } = useScroll();
  const { isLoading } = useLoading();

  useEffect(() => {
    window.scrollTo(0, 1);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/" && !isLoading && window.scrollY <= 1) {
      setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
          const sectionId = hash.substring(1);
          const element = document.getElementById(sectionId);
          if (element) {
            scrollToElement(element, 500);
          }
        } else {
          const targetId = "target";
          const element = document.getElementById(targetId);
          if (element) {
            scrollToElement(element, 500);
          }
        }
      }, 300);
    }
  }, [pathname, isLoading, scrollToElement]);

  return (
    <ErrorBoundary fallback={<Fallback />}>
      <VStack flex="1" p="0" spacing={{ base: "16", md: "24" }} bg="white">
        <MainVisual />
        <Outlet />
        <Footer />
      </VStack>
    </ErrorBoundary>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Top />
          </Suspense>
        )
      },
      {
        path: "/top",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Top />
          </Suspense>
        )
      },
      {
        path: "/activity",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Activity />
          </Suspense>
        )
      },
      {
        path: "/article/:id",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Article />
          </Suspense>
        )
      },
      {
        path: "/sponsor",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Sponsor />
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Contact />
          </Suspense>
        )
      },
      {
        path: "/memory",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Memory />
          </Suspense>
        )
      },
      {
        path: "/privacypolicy",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <PrivacyPolicy />
          </Suspense>
        )
      },
      {
        path: "/sitepolicy",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <SitePolicy />
          </Suspense>
        )
      }
    ]
  },
  {
    path: "/notfound",
    element: (
      <Suspense fallback={<ProgressBar />}>
        <NotFound />
      </Suspense>
    )
  },
  {
    path: "/error",
    element: (
      <Suspense fallback={<ProgressBar />}>
        <Error />
      </Suspense>
    )
  },
  { path: "*", element: <Navigate to="/notfound" replace /> }
]);

const RootRouter = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;
