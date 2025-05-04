import "@testing-library/jest-dom"; // Provides custom matchers for assertions

// Polyfill for TextEncoder and TextDecoder
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock import.meta.env (Vite environment variables)
global.importMeta = {
  env: {
    VITE_FIREBASE_API_KEY: "mock-api-key",
    VITE_FIREBASE_AUTH_DOMAIN: "mock-auth-domain",
    VITE_FIREBASE_PROJECT_ID: "mock-project-id",
    VITE_FIREBASE_STORAGE_BUCKET: "mock-storage-bucket",
    VITE_FIREBASE_MESSAGING_SENDER_ID: "mock-messaging-sender-id",
    VITE_FIREBASE_APP_ID: "mock-app-id",
    VITE_FIREBASE_MEASUREMENT_ID: "mock-measurement-id",
  },
};

// Mock the firebase modules
jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(() => ({})),
}));

jest.mock("firebase/auth", () => ({
  getAuth: jest.fn(() => ({
    currentUser: null,
    signOut: jest.fn().mockResolvedValue({}),
  })),
  signInWithEmailAndPassword: jest.fn().mockResolvedValue({
    user: { uid: "test-uid", email: "test@example.com" },
  }),
  createUserWithEmailAndPassword: jest.fn().mockResolvedValue({
    user: { uid: "test-uid", email: "test@example.com" },
  }),
  signOut: jest.fn().mockResolvedValue({}),
}));

jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(() => ({
    collection: jest.fn().mockReturnThis(),
    doc: jest.fn().mockReturnThis(),
    get: jest.fn().mockResolvedValue({ exists: true, data: () => ({}) }),
  })),
  collection: jest.fn().mockReturnThis(),
  doc: jest.fn().mockReturnThis(),
  getDoc: jest.fn().mockResolvedValue({ exists: true, data: () => ({}) }),
  setDoc: jest.fn().mockResolvedValue({}),
}));

jest.mock("firebase/analytics", () => ({
  getAnalytics: jest.fn(() => ({})),
}));

// Mock react-firebase-hooks
jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: jest.fn(() => [null, false, undefined]),
}));

// Explicitly mock your firebase.js file (using the correct path)
jest.mock("./src/firebase", () => ({
  auth: {
    currentUser: null,
    signOut: jest.fn().mockResolvedValue({}),
  },
  db: {
    collection: jest.fn().mockReturnThis(),
    doc: jest.fn().mockReturnThis(),
  },
}));
