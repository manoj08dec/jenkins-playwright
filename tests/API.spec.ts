import { request } from "playwright";
import * as process from "process";
import { test } from "playwright/test";

const API_URL = process.env.BASE_URL_API;
let responseBody: BookingResponse;
let bookingId: number;

type BookingResponse = {
    bookingid: number;
    booking: {
        firstname: string;
        lastname: string;
    }
}

test.describe('API Tests', () => {
    let apiContext: any;

    test.beforeAll(async () => {
        apiContext = await request.newContext({
            ignoreHTTPSErrors: true
        });
    });

    test('API Test: Create Booking', async () => {
        const response = await apiContext.post(`${API_URL}/booking`, {
            data: {
                "firstname": "Manoj1",
                "lastname": "Ma1",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2026-05-23",
                    "checkout": "2026-05-25"
                },
                "additionalneeds": "Breakfast"
            },
        });

        responseBody = await response.json();

        console.log("URL:", response.url());
        console.log("Status:", response.status());
        console.log("Headers:", response.headers());
        console.log("Body:", await response.text());
        console.log(responseBody);
        console.log(responseBody.bookingid);
        console.log(responseBody.booking.firstname);
        console.log(responseBody.booking.lastname);

        bookingId = responseBody.bookingid;
    });

    test('Get Booking by ID', async () => {

        const response = await apiContext.get(`${API_URL}/booking/${bookingId}`)
        
        console.log("URL:", response.url());
        console.log("Status:", response.status());
        console.log("Headers:", response.headers());
        console.log("Body:", await response.text());
        console.log(await response.json());
    });
});