import { HoverButton } from "../Buttons";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div
      className={styles.header}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
       
      
        

        // backgroundColor: "red",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          <HoverButton>
            <img
              src={"/icons/MenuIcon.svg"}
              width={23}
              height={23}
              style={{
                padding: 8,
              }}
              alt="Menu"
            />
          </HoverButton>
          <HoverButton>
            <span
              style={{
                lineHeight: 1.25,
                fontSize: ".8rem",
                padding: 10,
              }}
            >
              Creator Program
            </span>
          </HoverButton>
          <HoverButton>
            <span
              style={{
                lineHeight: 1.25,
                fontSize: ".8rem",
                padding: 10,
              }}
            >
              Start Exploring
            </span>
          </HoverButton>
        </div>
      </div>

      <img
        src={"/icons/FullLogo.svg"}
        width={175}
        height={28}
        style={{
          padding: 8,
        }}
        alt="Full Logo"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
        }}
      >
        <HoverButton>
          <span
            style={{
              lineHeight: 1.25,
              fontSize: ".8rem",
              padding: 10,
            }}
          >
            Sign in
          </span>
        </HoverButton>

        <span
          style={{
            lineHeight: 1.25,
            fontSize: ".8rem",
            padding: "7px 10px",
            border: "1px solid black",
            borderRadius: 50,
            cursor: "pointer",
          }}
        >
          Get Started
        </span>
      </div>
    </div>
  );
}
