import { StarIcon } from "@heroicons/react/outline";
import { StarIcon as SolidStar } from "@heroicons/react/solid";
import * as React from "react";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { zTasteForm } from "./TasteForm";
import z from "zod";

interface IRating {
    setValue: UseFormSetValue<z.infer<typeof zTasteForm>>;
    getValues: UseFormGetValues<z.infer<typeof zTasteForm>>;
}

const Rating = ({ getValues, setValue }: IRating) => {
    const [currentHover, setCurrentHover] = React.useState<number>();

    const StarRating = ({ val }) => {
        return (
            <button
                onClick={() => {
                    setValue("rating", val, {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch: true,
                    });
                }}
                className="text-amber-500 "
                onMouseEnter={() => setCurrentHover(val)}
                onMouseLeave={() => setCurrentHover(undefined)}
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
        <div className="flex space-x-2">
            <StarRating val={1} />
            <StarRating val={2} />
            <StarRating val={3} />
            <StarRating val={4} />
            <StarRating val={5} />
        </div>
    );
};

export default Rating;
