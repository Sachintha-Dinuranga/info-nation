import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import { FavoritesProvider } from "../context/FavoritesContext";

// Mock fetch before tests
global.fetch = jest.fn();

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

// Mock country data
const mockCountries = [
  {
    name: { common: "Test Country 1" },
    flags: { svg: "flag1.svg" },
    cca3: "TC1",
    region: "Europe",
    capital: ["Capital 1"],
    population: 1000000,
  },
  {
    name: { common: "Test Country 2" },
    flags: { svg: "flag2.svg" },
    cca3: "TC2",
    region: "Asia",
    capital: ["Capital 2"],
    population: 2000000,
  },
];

describe("HomePage Component", () => {
  beforeEach(() => {
    // Setup fetch mock to return test data
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => mockCountries,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders countries after fetching data", async () => {
    render(
      <BrowserRouter>
        <FavoritesProvider>
          <HomePage />
        </FavoritesProvider>
      </BrowserRouter>
    );

    // Check loading state first
    expect(screen.getByText(/Loading countries.../i)).toBeInTheDocument();

    // Wait for countries to load
    await waitFor(() => {
      expect(screen.getByText("Test Country 1")).toBeInTheDocument();
    });

    // Check if both countries are rendered
    expect(screen.getByText("Test Country 1")).toBeInTheDocument();
    expect(screen.getByText("Test Country 2")).toBeInTheDocument();
  });

  test("filters countries when searching", async () => {
    render(
      <BrowserRouter>
        <FavoritesProvider>
          <HomePage />
        </FavoritesProvider>
      </BrowserRouter>
    );

    // Wait for countries to load
    await waitFor(() => {
      expect(screen.getByText("Test Country 1")).toBeInTheDocument();
    });

    // Setup fetch mock to return filtered data
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [mockCountries[0]],
    });

    // Find search input and type a search term
    const searchInput = screen.getByPlaceholderText(/search for a country/i);
    fireEvent.change(searchInput, { target: { value: "Test Country 1" } });

    // Wait for the filtered list to appear
    await waitFor(() => {
      expect(screen.getByText("Test Country 1")).toBeInTheDocument();
      expect(screen.queryByText("Test Country 2")).not.toBeInTheDocument();
    });
  });
});
