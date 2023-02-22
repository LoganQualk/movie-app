import { useState, useEffect } from 'react';
import axios from "axios";

const apiKey = "afc51ac0"

//https://medium.com/bb-tutorials-and-thoughts/how-to-make-api-calls-in-react-applications-7758052bf69
export async function getMovie(title) {
    const searchUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;
        let response = await axios({
            method: "GET",
            url: searchUrl,
        });
        return response.data;
}