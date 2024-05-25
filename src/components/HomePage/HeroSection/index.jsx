
import Header from "../../Header";
import style from "./style.module.css";
import { ReactTyped } from "react-typed";

export default function HeroSection() {
  return (
    <div
      className="HeroSection"
      style={{
        backgroundImage: `url("https://mindtrip.ai/cdn-cgi/image/w=1920/https://images.mindtrip.ai/web/Heroes.jpg")`,
        height: "110vh",
        backgroundSize: "cover",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
      }}
    >
      <Header />

      <div
        style={{
          height: "calc(100%)",
          position: "relative",
          padding: "0px 50px",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "red",
          top: -68,
        }}
      >
        <div
          style={
            {
              // backgroundColor: "pink",
            }
          }
        >
          <div
            className="left-hero-section"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              gap: 25,
            }}
          >
            <h1
              style={{
                fontSize: "8rem",
                fontWeight: "bold",
                marginTop: 150,
                marginBottom: 0,
              }}
            >
              Travel <br />
              <ReactTyped 
                strings={[
                  "better.",
                  "together.",
                  "differently.",
                ]}
                typeSpeed={40}
                backSpeed={50}
                
                loop
              />
            </h1>
            <span
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              }}
            >
              Mindtrip brings the world to you and empowers you <br /> to
              experience it your way.
            </span>
            <div
              style={{
                display: "flex",
                gap: 20,
                alignItems: "center",
              }}
            >
              <span
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontWeight: 500,
                  padding: "25px 40px ",
                  borderRadius: 50,
                }}
              >
                Get Started
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="shrink-0 transition-transform group-hover:scale-110"
                >
                  <path
                    d="M12 0c6.628 0 12 5.372 12 12s-5.372 12-12 12S0 18.628 0 12 5.372 0 12 0ZM9.428 9.278v5.444a1 1 0 0 0 1.5.866l4.715-2.722a1 1 0 0 0 0-1.732l-4.715-2.722a1 1 0 0 0-1.5.866Z"
                    fill="currentColor"
                    fill-rule="nonzero"
                    stroke-width="0"
                  ></path>
                </svg>
                <span>Play Video</span>
              </div>
            </div>
          </div>
          <div className="right-hero-section">
            <img
              alt=""
              fetchpriority="high"
              width="246"
              height="282"
              decoding="async"
              data-nimg="1"
              class={style["floating"]}
              style={{
                color: "transparent",
                position: "absolute",
                right: "25.25vw",
                top: "37%",
              }}
              srcset="https://mindtrip.ai/cdn-cgi/image/w=256,h=293,fit=cover/https://images.mindtrip.ai/web/London.png 1x, https://mindtrip.ai/cdn-cgi/image/w=640,h=734,fit=cover/https://images.mindtrip.ai/web/London.png 2x"
              src="https://mindtrip.ai/cdn-cgi/image/w=640,h=734,fit=cover/https://images.mindtrip.ai/web/London.png"
            />
            <img
              alt=""
              fetchpriority="high"
              width="220"
              height="261"
              decoding="async"
              data-nimg="1"
              class={style["floating"]}
              style={{
                color: "transparent",
                position: "absolute",
                right: "4.25vw",
                top: "17%",
              }}
              srcset="https://mindtrip.ai/cdn-cgi/image/w=256,h=304,fit=cover/https://images.mindtrip.ai/web/Paris.png 1x, https://mindtrip.ai/cdn-cgi/image/w=640,h=759,fit=cover/https://images.mindtrip.ai/web/Paris.png 2x"
              src="https://mindtrip.ai/cdn-cgi/image/w=640,h=759,fit=cover/https://images.mindtrip.ai/web/Paris.png"
            />
            <img
              alt=""
              fetchpriority="high"
              width="220"
              height="191"
              decoding="async"
              data-nimg="1"
              class={style["floating"]}
              style={{
                color: "transparent",
                position: "absolute",
                right: "6.25vw",
                top: "66%",
                bottom: "5%",
              }}
              srcset="https://mindtrip.ai/cdn-cgi/image/w=256,h=222,fit=cover/https://images.mindtrip.ai/web/Rome.png 1x, https://mindtrip.ai/cdn-cgi/image/w=640,h=556,fit=cover/https://images.mindtrip.ai/web/Rome.png 2x"
              src="https://mindtrip.ai/cdn-cgi/image/w=640,h=556,fit=cover/https://images.mindtrip.ai/web/Rome.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
