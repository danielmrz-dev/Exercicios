package br.com.alura.screenmatch.DTO;

import br.com.alura.screenmatch.model.Categoria;

public record SerieDTO(
        String titulo,
        Integer totalTemporadas,
        Double avaliacao,
        Categoria genero,
        String atores,
        String poster,
        String sinopse
) {}
