class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.alturaDoPulo = -50;
    this.gravidade = 6;
    this.pulos = 0;
  }
  
  pula(){
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
  }
}
  
  aplicaGravidade(){
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }
  
  estaColidindo(inimigo){
    let precisaoAlt = 0.8;
    let precisaoLar = 0.8;
    let precisao = 0.7;
    const colisao = collideRectCircle(this.x, this.y, this.largura*precisao, this.altura*precisao, inimigo.x + inimigo.largura/2+15, inimigo.y + inimigo.altura/2, inimigo.largura*precisao);
    
    return colisao;
  }
}
