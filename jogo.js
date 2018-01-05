var rodada = 1;
var matriz_jogo = Array(3);

//criação de array bidimensional para guarda pontos
matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(document).ready( function(){

	
	$('#btn_iniciar_jogo').click( function(){
		
		//validar a digitação dos apelidos do jogadores
		if($('#entrada_jogador1').val() == '') {
			alert('nome do jogadoe 1 não foi preeenchido');
			return false;
			
			
		}

		if($('#entrada_jogador2').val() == '') {
			alert('nome do jogadoe 2 não foi preeenchido');
			return false;
			
			
		}

		//exibir apelido
		$('#nomeJogador1').html($('#entrada_jogador1').val());
		$('#nomeJogador2').html($('#entrada_jogador2').val());

		//controla visualização das divs
		$('#pagina_inicial').hide();
		$('#palco_jogo').show();


	});

	$('.jogada').click( function(){
		
		var id_campo_click = this.id;
		$('#'+id_campo_click).off();
		jogada(id_campo_click);

	});

	function jogada(id) {
		var icone = '';
		var ponto = 0;

		if((rodada % 2) == 1){
			icone = 'url("imagens/marcacao_1.png")';
			ponto = -1;
		} else {
			icone = 'url("imagens/marcacao_2.png")';
			ponto = 1;
		}
		
		rodada++;

		$('#'+id).css('background-image', icone);

		var linha_coluna = id.split('-');

		matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;
		
		verificar_combinacao();
	}

	function verificar_combinacao(){
		//verificar na horizontal
		var pontos = 0;
		for (var i = 1; i <= 3; i++) {
			pontos = pontos + matriz_jogo['a'][i];
		}
		ganhador(pontos);
		pontos = 0;

		var pontos = 0;
		for (var i = 1; i <= 3; i++) {
			pontos = pontos + matriz_jogo['b'][i];
		}
		ganhador(pontos);
		pontos = 0;

		var pontos = 0;
		for (var i = 1; i <= 3; i++) {
			pontos = pontos + matriz_jogo['c'][i];
		}
		ganhador(pontos);
		
		//verificar na vertical

		for (var l = 1; l <= 3; l++) {
			pontos = 0;
			pontos += matriz_jogo['a'][l];
			pontos += matriz_jogo['b'][l];
			pontos += matriz_jogo['c'][l];

			ganhador(pontos);
		}

		//verificar na diagonal

		pontos = 0;

		pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
		ganhador(pontos);

		pontos = 0;
		pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
		ganhador(pontos);


	}

	function ganhador(point) {
			if (point == -3) {
				var jogada_1 = $('#entrada_jogador1').val();
				alert(jogada_1 +' é o vencedor');
			} else if (point == 3) {
				var jogada_2 = $('#entrada_jogador2').val();
				alert(jogada_2 +' é o vencedor');
			}
			
		}
});