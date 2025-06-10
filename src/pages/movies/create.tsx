import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { movieSchema } from "../../types/movie";
import type { Movie } from "../../types/movie";
import { createMovie } from "../../services/movie.service";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const CreateMovie = () => {
  const { mutateAsync } = useMutation({
    mutationFn: createMovie,
  });
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Movie, "_id">>({
    resolver: zodResolver(movieSchema),
  });

  const onSubmit = (data: Omit<Movie, "_id">) => {
    console.log(data);
    mutateAsync(data).then(() => {
      console.log("Movie created");
      navigate("/movies");
    });
  };

  console.log(register("description"));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} />
        {errors.title && <p>{errors.title.message}</p>}
        <input {...register("description")} />
        {errors.description && <p>{errors.description.message}</p>}
        <input {...register("rating")} />
        {errors.rating && <p>{errors.rating.message}</p>}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateMovie;
