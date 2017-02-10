

class Carousel {
    options: {
        tray: string,
        gate: string,
        controller: string;
    };

    tray: HTMLElement;
    gate: Element;
    controller: Element;

    private _position: number = 0;

    get position(): number {
        return this._position;
    }

    set position(data: number) {
        this._position = data;

        this.test();

        // this.tray.style.transform = 'translateX(' + ')';
    }

    constructor(options) {
        this.options = options;
    }

    test() {
        this.tray.style.transform = 'translateX(-' + this.position * 200 + 'px)';
    }

    init() {
        let that = this;

        console.log('AND HERE WE GO', this.options);

        this.tray = <HTMLElement>document.querySelector(this.options.tray);

        console.log(this.tray);

        // create the gate

        let newDiv = document.createElement('div');

        newDiv.setAttribute("class", "carousel");

        // this.root.setAttribute("class", "tray");

        let parent = this.tray.parentElement;

        parent.appendChild(newDiv);

        // newDiv.appendChild(this.tray);

        // gate
        this.gate = document.createElement('div');
        this.gate.setAttribute('class', 'gate');

        newDiv.appendChild(this.gate);

        this.gate.appendChild(this.tray);

        // controller
        this.controller = document.querySelector(this.options.controller);

        if (this.controller) {
            newDiv.appendChild(this.controller);
        }

        // controls

        let nextControl = this.controller.querySelector('.next');

        nextControl.addEventListener('click', function(e) {
            that.position++;
        });
    }
}
export {Carousel};