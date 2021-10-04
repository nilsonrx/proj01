$(function(){
    var operacao = "A"; //"A"=Adição; "E"=Edição
    var indice_selecionado = -1; //Índice do item selecionado na lista
    var tbfilmes = localStorage.getItem("tbfilmes");// Recupera os dados armazenados
    tbfilmes = JSON.parse(tbfilmes); // Converte string para objeto

		if(tbClientes == null){ 
	    tbClientes = [];
		}

		$("#frmCadastro").on("submit",function(){
			if(operacao == "A"){
			    return Adicionar(tbfilmes);
			}else{
			    return Editar(tbfilmes,indice_selecionado);
			}
		});

		Listar(tbfilmes);

		$("#tblListar").on("click", ".btnEditar", function(){
	    operacao = "E";
	    indice_selecionado = parseInt($(this).attr("alt"));
			var cli = JSON.parse(tbfilmes[indice_selecionado]);
	    $("#txtFilme").val(cli.Filme);
	    $("#txtimagem").val(cli.Imagem);
	    $("#txtcategoria").val(cli.categoria);
	    $("#txtnota").val(cli.nota);
			$("#txtFilme").attr("readonly","readonly");
		  $("#txtimagem").focus();
		});

		$("#tblListar").on("click", ".btnExcluir",function(){
	    indice_selecionado = parseInt($(this).attr("alt"));
			Excluir(tbFilmes, indice_selecionado);
	    Listar(tbFilmes);
		});
});

function Adicionar(tbfilmes){

		var Filme = JSON.stringify({
        Filme   : $("#txtFilme").val(),
        Imagem     : $("#txtimagem").val(),
        Categoria : $("#txtcategoria").val(),
        Nota    : $("#txtnota").val()
    });
    tbClientes.push(Filme);
		console.log("tbFilmes - " + tbfilmes);
    localStorage.setItem("tbFilmes", JSON.stringify(tbfilmes));
    alert("Registro adicionado.");
    return true;
}

