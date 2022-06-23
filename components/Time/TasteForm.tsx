import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useLocalStorage from "../../utils/hooks/useLocalStorage";

const zTasteForm = z.object({
    name: z.string(),
    time: z.number(),
    coffeeName: z.string().optional(),
    coffeeType: z.string().optional(),
    coffeeRoast: z.string().optional(),
    grindSetting: z.string().optional(),
    coffeeWeight: z.number().optional(),
    aroma: z.string().optional(),
    sweetness: z.string().optional(),
    body: z.string().optional(),
    aftertaste: z.string().optional(),
    taste: z.string().optional(),
    bitterness: z.string().optional(),
    rating: z.number().min(0).max(10).step(1).optional(),
    comments: z.string().optional(),
});

const zTasteForms = z.array(zTasteForm);

const TasteForm = () => {
    const [forms, setForms] = useLocalStorage<z.infer<typeof zTasteForms>>(
        "tasteForms",
        []
    );

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<z.infer<typeof zTasteForm>>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: zodResolver(zTasteForm),
    });

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <input {...register("name")} />
        </div>
    );
};
export default TasteForm;
