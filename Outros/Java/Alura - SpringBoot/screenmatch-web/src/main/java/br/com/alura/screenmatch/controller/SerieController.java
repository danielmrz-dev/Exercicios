package br.com.alura.screenmatch.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SerieController {

    @GetMapping("/series")
    public String obterSeries() {
        return "Método GET funcionando!";
    }

    @GetMapping("/episodios")
    public String obterEpisodios() {
        return "Método GET Episódios funcionando!";
    }

}
