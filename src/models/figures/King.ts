import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import whiteLogo from "../../assets/white-king.png";
import blackLogo from "../../assets/black-king.png";

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        const dx = Math.abs(target.x - this.cell.x);
        const dy = Math.abs(target.y - this.cell.y);

        if (dx == 1 && dy == 1) {
            return true;
        } else if (dx == 1 && dy == 1) {
            return true;
        } else if (target.x === this.cell.x + 1 && target.y === this.cell.y) {
            return true;
        } else if (target.x === this.cell.x - 1 && target.y === this.cell.y) {
            return true;
        } else if (target.y === this.cell.y - 1 && target.x === this.cell.x) {
            return true;
        } else if (target.y === this.cell.y + 1 && target.x === this.cell.x) {
            return true;
        }
        return false;
    }
}
