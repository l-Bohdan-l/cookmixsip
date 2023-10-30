import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import { Container } from "../Container/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BodyWrapper, Wrapper } from "./SharedLayout.styled";

export function SharedLayout() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Container>
        <Suspense
          fallback={
            <ColorRing
              wrapperStyle={{
                display: "block",
                margin: "0 auto",
              }}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          }
        >
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
