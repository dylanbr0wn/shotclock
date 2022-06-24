import z from "zod"

export const zBrewMethod = z.object({
    name: z.string(),
    id: z.string(),
});

export const zRoast = z.object({
    name: z.string(),
    id: z.string(),
});

export const zBrew = z.object({
    name: z
        .string({
            required_error: "Your brew needs a name!",
        })
        .trim()
        .min(1, "Your brew needs a name!"),
    time: z.number(),
    coffeeName: z.string().optional(),
    coffeeType: zBrewMethod.optional(),
    coffeeRoast: zRoast.optional(),
    grindSetting: z.string().optional(),
    coffeeIn: z.number().min(0).optional(),
    coffeeOut: z.number().min(0).optional(),
    rating: z.number().min(0).max(10).step(1).optional(),
    comments: z.string().optional(),
    id: z.string().optional(),
    created: z.string().optional(),
});

export const zTasteForms = z.array(
    zBrew
);

export type Brews = z.infer<typeof zTasteForms>;
export type Brew = z.infer<typeof zBrew>;
export type IZBrewMethod = z.infer<typeof zBrewMethod>;
export type IZRoast = z.infer<typeof zRoast>;