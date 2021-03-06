import { Button } from "./Button";
import "../styles/sidebar.scss";
import { useMemo } from "react";
interface Genre {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface GenreResponseProps {
  genre: {
    genres: Genre[];
    handleClickButton: Function;
    selectedGenreId: number;
  };
}

export function SideBar(props: GenreResponseProps) {
  // Complete aqui
  const { genres, handleClickButton, selectedGenreId } = props.genre;

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: Genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
