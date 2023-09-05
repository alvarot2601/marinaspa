import { Divider } from "@nextui-org/react";
import React from "react";

const Lista3 = ({ obj }) => {
    return obj.category.map((category, index) => {
        const reverseRowClass = index % 2 === 0 ? "" : "order-1";
        return (
            <div className="flex gap-5 mt-10 text-gray-900">
                <div
                    className={`w-2/4  px-7 py-5 ${reverseRowClass} flex flex-col justify-center`}
                >
                    {category !== "" ? (
                        <span className="text-4xl font-semibold">{category}</span>
                    ) : (
                        ""
                    )}
                    <p className="text-lg mt-5 mb-3 italic">
                        {Array.isArray(obj.category_text)
                            ? obj.category_text[index]
                            : obj.category_text}
                    </p>
                    <ul className="font-semibold text-lg  pl-3">
                        {obj.treatments[index].map((treatment, index2) => {
                            return (
                                <>
                                    
                                    <li
                                        className="py-3"
                                        key={`li_${obj.category[index]}_${index}`}
                                    >
                                        <span>{treatment[0]}</span>
                                    </li>
                                    {
                                        index2 !== obj.treatments[index].length - 1 ? <Divider /> : ''
                                    }
                                </>
                            );
                        })}
                    </ul>
                </div>
                {Array.isArray(obj.images) ? (
                    obj.images[index] !== "" ? (
                        <div className="w-2/4">
                            <img className="h-full object-cover" src={obj.images[index]} alt="" />
                        </div>
                    ) : (
                        ""
                    )
                ) : (
                    ""
                )}
            </div>
        );
    });
};

export default Lista3;
