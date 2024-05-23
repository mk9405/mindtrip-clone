import HeroSection from "../components/HomePage/HeroSection";
import { IoCarSportOutline } from "react-icons/io5";

function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeroSection />
      <div
        className="AI_Text"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "144px 0",
          alignItems: "center",
        }}
      >
        <svg viewBox="0 0 24 24" height="50" class="mx-auto">
          <path
            fill="currentColor"
            d="M17.991 5.27c1.466-.272 2.314-1.13 2.555-2.575.152 1.392 1.214 2.397 2.533 2.565-1.45.267-2.303 1.12-2.544 2.58a2.862 2.862 0 0 0-.806-1.732 2.887 2.887 0 0 0-1.738-.838ZM1.318 12.877C7.662 11.699 11.332 7.983 12.374 1.73c.657 6.026 5.256 10.375 10.964 11.1C17.063 13.987 13.37 17.68 12.328 24c-.317-2.877-1.45-5.414-3.488-7.499-2.085-2.084-4.6-3.262-7.522-3.624ZM.66 3.434C2.614 3.07 3.745 1.926 4.066 0c.202 1.857 1.62 3.197 3.378 3.42-1.933.356-3.07 1.494-3.392 3.44-.098-.886-.447-1.667-1.075-2.31C2.335 3.909 1.56 3.547.66 3.435Z"
          ></path>
        </svg>
        <h1
          style={{
            fontSize: 60,
          }}
        >
          AI-powered travel,
          <br />
          Personalized to you
        </h1>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            margin: "40px 0",
          }}
        >
          <div>
            <img
              alt=""
              loading="lazy"
              width="720"
              height="641"
              decoding="async"
              data-nimg="1"
              class="mx-auto"
              srcset="https://mindtrip.ai/cdn-cgi/image/w=750,h=668,fit=cover/https://images.mindtrip.ai/web/1_Img.jpg 1x, https://mindtrip.ai/cdn-cgi/image/w=1920,h=1709,fit=cover/https://images.mindtrip.ai/web/1_Img.jpg 2x"
              src="https://mindtrip.ai/cdn-cgi/image/w=1920,h=1709,fit=cover/https://images.mindtrip.ai/web/1_Img.jpg"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: 350,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={
                {
                  // backgroundColor: "pink",
                }
              }
            >
              <h3
                style={{
                  fontSize: 48,
                  marginBottom: 0,
                }}
              >
                Personalized
              </h3>
              <p
                style={{
                  fontSize: 20,
                }}
              >
                Ask us anything travel-related. We gather content from thousands
                of sources and, based on your unique preferences, we’ll curate
                experiences that will inspire and excite you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            margin: "40px 0",
          }}
        >
          <div>
            <img
              alt=""
              loading="lazy"
              width="720"
              height="641"
              decoding="async"
              data-nimg="1"
              class="mx-auto"
              src="https://mindtrip.ai/cdn-cgi/image/w=750,h=668,fit=cover/https://images.mindtrip.ai/web/2_Img.jpg"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: 350,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={
                {
                  // backgroundColor: "pink",
                }
              }
            >
              <h3
                style={{
                  fontSize: 48,
                  marginBottom: 0,
                }}
              >
                Actionable
              </h3>
              <p
                style={{
                  fontSize: 20,
                }}
              >
                In seconds, we provide you with interactive and customizable
                itineraries that include everything you need for an adventure
                across the world or in your own backyard.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            margin: "40px 0",
          }}
        >
          <div>
            <img
              alt=""
              loading="lazy"
              width="720"
              height="641"
              decoding="async"
              data-nimg="1"
              class="mx-auto"
              src="https://mindtrip.ai/cdn-cgi/image/w=750,h=682,fit=cover/https://images.mindtrip.ai/web/3_Img.jpg"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: 350,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={
                {
                  // backgroundColor: "pink",
                }
              }
            >
              <h3
                style={{
                  fontSize: 48,
                  marginBottom: 0,
                }}
              >
                All in one place
              </h3>
              <p
                style={{
                  fontSize: 20,
                }}
              >
                Only Mindtrip makes it easy for you to keep track of all of your
                reservations — transportation, hotels, restaurants and
                activities — all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "block",
          backgroundColor: "rgba(0,0,0,0.025)",
          padding: "96px 0",
        }}
      >
        <h3
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            fontSize: 60,
          }}
        >
          Everything you need <br /> for your next adventure
        </h3>
      </div>

      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.025)",
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "40px 0",
            flexDirection: "row-reverse",
            backgroundColor: "white",
          }}
        >
          <div>
            <img
              alt=""
              loading="lazy"
              width="720"
              height="641"
              decoding="async"
              data-nimg="1"
              class="mx-auto"
              src="https://mindtrip.ai/cdn-cgi/image/w=750,h=667,fit=cover/https://images.mindtrip.ai/web/4_Img.jpg"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: 350,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={
                {
                  // backgroundColor: "pink",
                }
              }
            >
              <h3
                style={{
                  fontSize: 48,
                  marginBottom: 0,
                  fontWeight: 500,
                }}
              >
                Photos, maps +<br /> reviews
              </h3>
              <p
                style={{
                  fontSize: 20,
                }}
              >
                Don’t just read about a place; experience it. With vibrant
                photos, interactive maps and reviews, you’ll feel like you’re
                already there.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          backgroundColor: "rgba(0,0,0,0.025)",
          padding: 20,
          gap: 20,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            flexGrow: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              margin: "40px 0",
              flexDirection: "column-reverse",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img
                alt=""
                loading="lazy"
                width="580"
                height="463"
                decoding="async"
                data-nimg="1"
                class="mx-auto"
                src="https://mindtrip.ai/cdn-cgi/image/w=640,h=512,fit=cover/https://images.mindtrip.ai/web/5_Img.jpg"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: 350,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div
                style={
                  {
                    // backgroundColor: "pink",
                  }
                }
              >
                <h3
                  style={{
                    fontSize: 48,
                    marginBottom: 0,
                    fontWeight: 500,
                  }}
                >
                  Tailored <br />
                  recommendations
                </h3>
                <p
                  style={{
                    fontSize: 20,
                  }}
                >
                  From the best restaurants in your town to the best beaches
                  around the world, we&apos;ve got you covered. Favorite the
                  recommendations you like and add them to your trip plan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            flexGrow: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              margin: "40px 0",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column-reverse",
            }}
          >
            <div>
              <img
                alt=""
                loading="lazy"
                width="580"
                height="463"
                decoding="async"
                data-nimg="1"
                class="mx-auto"
                src="https://mindtrip.ai/cdn-cgi/image/w=640,h=509,fit=cover/https://images.mindtrip.ai/web/6_Img.jpg"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: 350,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: 48,
                    marginBottom: 0,
                    fontWeight: 500,
                  }}
                >
                  Customizable
                  <br />
                  trip plans
                </h3>
                <p
                  style={{
                    fontSize: 20,
                  }}
                >
                  In seconds, we&apos;ll curate customizable itineraries for
                  anywhere you&apos;d like to go. Include specifics in your
                  requests so we can personalize your plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.025)",
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "40px 0",
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: 20,
          }}
        >
          <div
            style={
              {
                // backgroundColor: "pink",
              }
            }
          >
            <img
              alt=""
              loading="lazy"
              width="633"
              height="563"
              decoding="async"
              data-nimg="1"
              class="mx-auto"
              src="https://mindtrip.ai/cdn-cgi/image/w=750,h=667,fit=cover/https://images.mindtrip.ai/web/7_Img.jpg"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: 350,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={
                {
                  // backgroundColor: "pink",
                }
              }
            >
              <h3
                style={{
                  fontSize: 48,
                  marginBottom: 0,
                  fontWeight: 500,
                }}
              >
                Trip sharing
              </h3>
              <p
                style={{
                  fontSize: 20,
                }}
              >
                Share your travel plans with friends and family. Publish your
                itineraries to help inspire other travelers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          padding: 65,
        }}
      >
        <h1
          style={{
            marginTop: 35,
            marginBottom: 50,
            fontSize: 60,
            flexBasis: "100%",
            textAlign: "center",
            lineHeight: 1.25,
          }}
        >
          Organize it all in one place.
        </h1>

        {[
          {
            key: 0,
            title: "Hotels",
            description:
              "Stay at the best hotels around the world for the best prices.",
          },
          {
            key: 1,
            title: "Car Rental",
            description: "Unlock deals on any type of wheels and hit the road.",
          },
          {
            key: 2,
            title: "Flights",
            description:
              "Get real-time airfares for anywhere you want to jet off to.",
          },
          {
            key: 3,
            title: "Restaurants",
            description: "Snag a coveted table at the hottest restaurants.",
          },
          {
            key: 4,
            title: "Experiences",
            description:
              "Make reservations for your favorite activities, then make memories.",
          },
          {
            key: 5,
            title: "Tours",
            description:
              "Get an insider’s perspective on any location or attraction.",
          },
        ].map((item) => {
          return (
            <div
              key={item.key}
              style={{
                flexBasis: "calc(33% - 20px)",
                padding: 10,
              }}
            >
              <div
                style={{
                  backgroundColor: "#f7f7f7",
                  padding: "30px 40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  borderRadius: 10,
                }}
              >
                <IoCarSportOutline size={28} />
                <h2
                  style={{
                    margin: 0,
                  }}
                >
                  {item.title}
                </h2>
                <p
                  style={{
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default HomePage;
