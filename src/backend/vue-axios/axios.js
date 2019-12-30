/* global localStorage */

import axios from "axios";

const API_URL = process.env.API_URL || "http://192.168.99.100:8000/wp-json";
const token =
  localStorage.token ||
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4Ljk5LjEwMDo4MDAwIiwiaWF0IjoxNTc3MTIyMDY4LCJuYmYiOjE1NzcxMjIwNjgsImV4cCI6MTU3NzcyNjg2OCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.WGX1u6oSdigo-nnT6rpbDiXt93LKol6_IzOYlyEa3Eo";
export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  }
});
