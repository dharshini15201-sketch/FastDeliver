package com.fastdeliver.controller;

import com.fastdeliver.service.JokeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/jokes")
@CrossOrigin(origins = "*")
public class JokeController {

    @Autowired
    private JokeService jokeService;

    @GetMapping("/random")
    public ResponseEntity<Map<String, Object>> getRandomJoke(
            @RequestParam(defaultValue = "any") String type) {
        try {
            Map<String, Object> joke = jokeService.getRandomJoke(type);
            return ResponseEntity.ok(joke);
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body(Map.of("error", true, "message", "Failed to fetch joke"));
        }
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<Map<String, Object>> getJokeByCategory(
            @PathVariable String category) {
        try {
            Map<String, Object> joke = jokeService.getJokeByCategory(category);
            return ResponseEntity.ok(joke);
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body(Map.of("error", true, "message", "Failed to fetch joke"));
        }
    }

    @GetMapping("/categories")
    public ResponseEntity<Map<String, Object>> getAvailableCategories() {
        return ResponseEntity.ok(
                Map.of("categories", new String[]{"General", "Programming", "Knock-Knock"})
        );
    }
}
