// index.js - AJAX 
// Author: Isabelle Lin <ilin14@ucsc.edu>
// Date: May 30, 2025

$(document).ready(function() {
    let totalPokemon = 151; // Default to original 151
            
    // Get total number of Pokémon
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon-species/?limit=0",
        type: "GET",
        dataType: "json",
        success: function(data) {
            totalPokemon = data.count;
        }
    });

    function displayPokemon(data) {
        const pokemonCard = `
            <div class="pokemon-card">
                <img src="${data.sprites.front_default}" alt="${data.name}" class="pokemon-image">
                <h2 class="pokemon-name">${data.name}</h2>
                <div class="pokemon-details">
                    <div><strong>Height:</strong> ${data.height / 10} m</div>
                    <div><strong>Weight:</strong> ${data.weight / 10} kg</div>
                    <div><strong>Abilities:</strong> 
                        ${data.abilities.map(a => a.ability.name).join(', ')}
                    </div>
                </div>
            </div>
        `;
$("#output").html(pokemonCard);
        }

$("#fetch-blastoise").click(function() {
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/blastoise",
            type: "GET",
            dataType: "json",
            success: displayPokemon,
            error: function() {
                $("#output").html("<p>Error loading Blastoise data</p>");
            }
        });
    });

    $("#fetch-eevee").click(function() {
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/eevee",
            type: "GET",
            dataType: "json",
            success: displayPokemon,
            error: function() {
                $("#output").html("<p>Error loading Eevee data</p>");
            }
        });
    });

    $("#fetch-random").click(function() {
        const randomId = Math.floor(Math.random() * totalPokemon) + 1;
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${randomId}`,
            type: "GET",
            dataType: "json",
            success: displayPokemon,
            error: function() {
        $("#output").html(`<p>Error loading Pokémon ID ${randomId}. Trying again...</p>`);
            // Retry if we hit an invalid ID
            setTimeout(() => $("#fetch-random").click(), 1000);
            }
        });
    });
});