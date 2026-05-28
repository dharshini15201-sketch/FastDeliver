package com.fastdeliver.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.Map;

@Service
public class JokeService {

    private static final String JOKE_API_BASE_URL = "https://v2.jokeapi.dev/joke";
    private final RestTemplate restTemplate = new RestTemplate();

    public Map<String, Object> getRandomJoke(String type) {
        String url = JOKE_API_BASE_URL + "/Any?type=" + type;
        return fetchJokeFromAPI(url);
    }

    public Map<String, Object> getJokeByCategory(String category) {
        String url = JOKE_API_BASE_URL + "/" + category + "?type=any";
        return fetchJokeFromAPI(url);
    }

    public Map<String, Object> getTwoPartJoke() {
        String url = JOKE_API_BASE_URL + "/Any?type=twopart";
        return fetchJokeFromAPI(url);
    }

    public Map<String, Object> getSingleJoke() {
        String url = JOKE_API_BASE_URL + "/Any?type=single";
        return fetchJokeFromAPI(url);
    }

    private Map<String, Object> fetchJokeFromAPI(String url) {
        try {
            Map<String, Object> response = restTemplate.getForObject(url, Map.class);
            if (response != null && response.containsKey("error") && 
                (boolean) response.get("error")) {
                return new HashMap<String, Object>() {{
                    put("error", true);
                    put("message", "No joke found");
                }};
            }
            return response;
        } catch (Exception e) {
            System.err.println("Error fetching joke: " + e.getMessage());
            return new HashMap<String, Object>() {{
                put("error", true);
                put("message", "Failed to fetch joke");
            }};
        }
    }
}
