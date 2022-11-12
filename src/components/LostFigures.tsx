import React from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
    title: string;
    figures: Figure[];
}

const LostFigures: React.FC<LostFiguresProps> = ({ title, figures }) => {
    return (
        <div className={"lost"}>
            <h3>{title}</h3>
            <div className={"grid grid-cols-4 gap-2"}>
                {figures.map((figure) => (
                    <div
                        key={figure.id}
                        className={"w-12 flex-row justify-center "}
                    >
                        {figure.name}{" "}
                        {figure.logo && (
                            <img
                                src={figure.logo}
                                alt="chess figure"
                                className={"w-12"}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LostFigures;
