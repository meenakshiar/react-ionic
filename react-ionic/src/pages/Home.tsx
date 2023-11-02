import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  // const navigate = useNavigate();
  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar> */}
      </IonHeader>
      <IonContent>
        <div
          style={{
            // border: "1px solid red",
            height: "352px",
            width: "748px",
            marginLeft: "-480px",
            marginTop: "-200px",
            backgroundColor: "#B5F8E1",
            transform: "rotate(48deg)",
            borderRadius: "32px",
          }}
        ></div>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <h2
                style={{
                  fontSize: "48px",
                  fontWeight: "800",
                  margin: "80px 0",
                }}
              >
                Sign Up
                <div
                  style={{
                    width: "170px",
                    margin: "auto",
                    height: "7px",
                    background: "#B5F8E1",
                  }}
                ></div>
              </h2>
            </IonCol>
          </IonRow>
          <div
            style={{
              borderRadius: "50px",
              padding: "3%",
              margin: "2%",
              background: "rgba(211, 251, 237, 0.32)",
            }}
          >
            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel style={{ color: "#5F5A5A" }} position="floating">
                    First Name
                  </IonLabel>
                  <IonInput type="text"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel style={{ color: "#5F5A5A" }} position="floating">
                    Last Name
                  </IonLabel>
                  <IonInput type="text"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel style={{ color: "#5F5A5A" }} position="floating">
                    Phone No.
                  </IonLabel>
                  <IonInput type="tel"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel style={{ color: "#5F5A5A" }} position="floating">
                    Username
                  </IonLabel>
                  <IonInput type="text"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel style={{ color: "#5F5A5A" }} position="floating">
                    Password
                  </IonLabel>
                  <IonInput type="password"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol style={{ display: "flex", justifyContent: "center" }}>
                <IonButton
                  style={{
                    margin: "0",
                    width: "250px",
                    height: "65px",
                    fontSize: "25px",
                    fontStyle: "normal",
                    fontWeight: 700,
                  }}
                  color={"primary"}
                  shape="round"
                  // onClick={}
                >
                  Sign Up
                </IonButton>
              </IonCol>
            </IonRow>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
