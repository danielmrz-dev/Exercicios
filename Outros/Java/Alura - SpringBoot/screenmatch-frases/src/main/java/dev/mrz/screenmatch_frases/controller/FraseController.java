package dev.mrz.screenmatch_frases.controller;

import dev.mrz.screenmatch_frases.DTO.FraseDTO;
import dev.mrz.screenmatch_frases.service.FraseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FraseController {

    @Autowired
    private FraseService servico;

    @GetMapping("/series/frases")
    public FraseDTO obterFrase() {
        return servico.obterFraseAleatoria();
    }
}
