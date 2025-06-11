import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  movieSchema,
  useCreateMovie,
} from "../../../features/movies/api/create-movie";
import type { Movie } from "../../../features/movies/api/get-movies";

const CreateMovie = () => {
  const navigate = useNavigate();

  const { mutateAsync } = useCreateMovie();

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
      navigate("/movies");
    });
  };

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
