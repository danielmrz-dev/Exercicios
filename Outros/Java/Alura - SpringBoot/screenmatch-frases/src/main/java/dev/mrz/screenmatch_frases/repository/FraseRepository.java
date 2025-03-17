package dev.mrz.screenmatch_frases.repository;

import dev.mrz.screenmatch_frases.model.Frase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FraseRepository extends JpaRepository<Frase, Long> {

    @Query("SELECT f FROM Frase f ORDER BY function('RANDOM') LIMIT 1")
    Frase buscaFraseAleatoria();
}
