// Simple mock of the auth and db exports
export const auth = {
    currentUser: null,
    signOut: jest.fn().mockResolvedValue({}),
  };
  
  export const db = {
    collection: jest.fn().mockReturnThis(),
    doc: jest.fn().mockReturnThis(),
    get: jest.fn().mockResolvedValue({ exists: true, data: () => ({}) }),
  };