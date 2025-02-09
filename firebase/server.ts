import { Firestore } from "firebase-admin/firestore";
import { getApps } from "firebase-admin/app";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { ServiceAccount } from "firebase-admin";
import admin from "firebase-admin";

const serviceAccount = {
    type: "service_account",
    project_id: "link-home-547c6",
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_id: process.env.FIREBASE_CLIENT_EMAIL,
    auth_uri: process.env.FIREBASE_CLIENT_ID,
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40link-home-547c6.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
};

let firestore: Firestore;

const currentApps = getApps();

if (!currentApps.length) {
    const app = initializeApp({
        credential: admin.credential.cert(serviceAccount as ServiceAccount),
    });
    firestore = getFirestore(app);
} else {
    const app = currentApps[0];
    firestore = getFirestore(app);
}

export { firestore };
