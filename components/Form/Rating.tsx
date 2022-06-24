import { StarIcon } from "@heroicons/react/outline";
import * as React from "react";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { Brew } from "../../utils/types";

interface IRating {
    setValue: UseFormSetValue<Brew>;
    getValues: UseFormGetValues<Brew>;
}

const Rating = ({ getValues, setValue }: IRating) => {
    const [currentHover, setCurrentHover] = React.useState<number>();

    const StarRating = ({ val }: { val: number }) => {
        const starRef = React.useRef<HTMLButtonElement>(null);
        const starOpenRef = React.useRef<HTMLButtonElement>(null);
        // const [hovered, setHovered] = React.useState<boolean>();

        // if (
        //     hovered &&
        //     divRef.current &&
        //     divRef.current.matches(":hover") === false
        // )
        //     setHovered(false);
        return (
            <button
                data-index={val}
                // ref={divRef}
                onClick={() => {
                    setValue("rating", val, {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch: true,
                    });
                }}
                className={`text-amber-500 h-10 w-10 p-1 ${
                    currentHover === val && "active:text-amber-600"
                }`}
                onMouseMove={(e) => {
                    const index = Number(
                        e.currentTarget.getAttribute("data-index")
                    );
                    if (index !== val) {
                        setCurrentHover(index);
                    } else {
                        setCurrentHover(val);
                    }

                    // setHovered(true);
                }}
                onMouseLeave={() => {
                    // setHovered(false);
                    setCurrentHover(undefined);
                }}
                onMouseOver={(e) => {
                    const index = Number(
                        e.currentTarget.getAttribute("data-index")
                    );
                    if (index !== val) {
                        setCurrentHover(index);
                    } else {
                        setCurrentHover(val);
                    }
                }}
            >
                {val <= (currentHover ?? getValues("rating") ?? 0) ? (
                    <StarIcon className="h-8 w-8 fill-current " />
                ) : (
                    <StarIcon className="h-8 w-8  " />
                )}
            </button>
        );
    };

    return (
        <div className="flex ">
            {[1, 2, 3, 4, 5].map((val) => (
                <StarRating key={val} val={val} />
            ))}
        </div>
    );
};

export default Rating;
