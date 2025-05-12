package com.viktor.ollamaaibackend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/ollama")
    public String ollamaPage() {
        return "ollama";
    }
}

