/**
 * Classe que modela um Retângulo
 */
class Rectangle {
    constructor(width = 2, height = 1) {
        this._width = width;
        this._height = height;
        this._color = "#FFFFFF";
    }

    // Propriedade width
    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    // Propriedade height
    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    // Propriedade color
    get color() {
        return this._color;
    }

    /**
     * @returns Retorna a área de um objeto retângulo
     */
    getArea() {
        return this._width * this._height;
    }

    /**
     * @returns Retorna o perímetro de um objeto retângulo
     * 
     */
    getPerimeter() {
        return this._height * 2 + this._width * 2;
    }

}




// Criar um objeto Rectangle
const newRectangle2 = new Rectangle();
const newRectangle = new Rectangle(10, 5);

// Imprimir propriedades e métodos para o objeto
console.log(newRectangle.width);
console.log(newRectangle.height);
console.log(newRectangle.color);
console.log(newRectangle.getArea());
console.log(newRectangle.getPerimeter());

// Imprimir propriedades e métodos para o objeto
console.log(newRectangle2.width);
console.log(newRectangle2.height);
console.log(newRectangle2.color);
console.log(newRectangle2.getArea());
console.log(newRectangle2.getPerimeter());
