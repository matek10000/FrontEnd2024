import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../data/AppContext";
import { useLocation, useNavigate } from "react-router-dom";

const Lab4Edit = () => {
    const { dispatch, items } = useContext(AppContext);
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    // Automatyczne uzupełnienianie pola formularza danymi osoby po id
    useEffect(() => {
        const personId = location.state?.id;
        if (personId) {
            const person = items.find((p) => p.id === personId);
            if (person) {
                setValue("id", person.id);
                setValue("name", person.name);
                setValue("birth", person.birth);
                setValue("eyes", person.eyes);
                setValue("rating", person.rating);
            }
        }
    }, [location.state, items, setValue]);

    const handleIdChange = (e) => {
        const id = Number(e.target.value);
        const person = items.find((p) => p.id === id);

        if (person) {
            setValue("name", person.name);
            setValue("birth", person.birth);
            setValue("eyes", person.eyes);
            setValue("rating", person.rating);
        } else {
            setValue("name", "");
            setValue("birth", "");
            setValue("eyes", "");
            setValue("rating", "");
        }
    };

    const onSubmit = (data) => {
        const id = Number(data.id);
        data["rating"] = parseInt(data["rating"]);

        if (items.some((person) => person.id === id)) {
            dispatch({
                type: "edit",
                payload: {
                    id: id,
                    name: data.name,
                    birth: data.birth,
                    eyes: data.eyes,
                    rating: data.rating,
                },
            });
            alert(`Zaktualizowano dane osoby o ID: ${id}`);
            navigate("/lab3");
        } else {
            alert(`Nie znaleziono osoby o ID: ${id}`);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>Edycja osoby</h1>
                <label>ID:</label>
                <input
                    type="number"
                    {...register("id", {
                        required: "ID jest wymagane",
                        onChange: handleIdChange,
                    })}
                />
                {errors.id && (
                    <p className="error-message">{errors.id.message}</p>
                )}
            </div>

            <div>
                <label>Name:</label>
                <input
                    {...register("name", {
                        required: "Nazwa jest wymagana",
                        maxLength: { value: 20, message: "Nazwa jest za długa" },
                    })}
                />
                {errors.name && (
                    <p className="error-message">{errors.name.message}</p>
                )}
            </div>

            <div>
                <label>Birth Date:</label>
                <input
                    type="date"
                    {...register("birth", {
                        required: "Data urodzenia jest wymagana",
                    })}
                />
                {errors.birth && (
                    <p className="error-message">{errors.birth.message}</p>
                )}
            </div>

            <div>
                <label>Eye Color:</label>
                <input
                    {...register("eyes", {
                        required: "Kolor oczu jest wymagany",
                        maxLength: {
                            value: 10,
                            message: "Kolor oczu jest za długi",
                        },
                    })}
                />
                {errors.eyes && (
                    <p className="error-message">{errors.eyes.message}</p>
                )}
            </div>

            <div>
                <label>Rating:</label>
                <input
                    type="number"
                    {...register("rating", {
                        required: "Ocena jest wymagana",
                        min: { value: 0, message: "Minimalna ocena to 0" },
                        max: { value: 10, message: "Maksymalna ocena to 10" },
                    })}
                />
                {errors.rating && (
                    <p className="error-message">{errors.rating.message}</p>
                )}
            </div>

            <button type="submit">Zapisz zmiany</button>
        </form>
    );
};

export default Lab4Edit;
