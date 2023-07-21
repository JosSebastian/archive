import { Content } from "../../types/types";

export const useArchive = async () => {
  const client = useSupabaseClient();
  const user = useSupabaseUser();

  const { data, error } = await client
    .from("content")
    .select()
    .eq("uid", user.value?.id);

  if (error) {
    console.log(error);
  } else {
    return data;
  }
};

export const useArchiveContent = () => {
  const content = useState("content", (): Content => ({}));
  return content;
};

const useArchiveValidate = () => {
  const content = useArchiveContent();

  // Validate Medium
  if (content.value.medium === null || content.value.medium === undefined) {
    console.log("Medium is Null or Undefined");
    return false;
  } else {
    if (content.value.medium === "") {
      console.log("Medium is Empty");
      return false;
    }
  }

  // Validate Title
  if (content.value.title === null || content.value.title === undefined) {
    console.log("Title is Null or Undefined");
    return false;
  } else {
    if (content.value.title === "") {
      console.log("Title is Empty");
      return false;
    }
  }

  // Validate Description
  if (
    content.value.description === null ||
    content.value.description === undefined
  ) {
    console.log("Description is Null or Undefined");
    return false;
  } else {
    if (content.value.description === "") {
      console.log("Description is Empty");
      return false;
    }
  }

  // Validate Genres
  if (content.value.genres === null || content.value.genres === undefined) {
    console.log("Genres is Null or Undefined");
    return false;
  } else {
    if (content.value.genres.length === 0) {
      console.log("Genres is Empty");
      return false;
    }
  }

  // Validate Status
  if (content.value.status === null || content.value.status === undefined) {
    console.log("Status is Null or Undefined");
    return false;
  } else {
    if (content.value.status === "") {
      console.log("Status is Empty");
      return false;
    }
  }

  // Validate Rating
  if (content.value.rating === null || content.value.rating === undefined) {
    console.log("Rating is Null or Undefined");
    return false;
  } else {
    if (content.value.rating < 0 || content.value.rating > 10) {
      console.log("Rating is Empty");
      return false;
    }
  }

  // Validate Volumes
  if (content.value.volumes === null || content.value.volumes === undefined) {
    console.log("Volumes is Null or Undefined");
    return false;
  } else {
    if (content.value.volumes.length === 0) {
      console.log("Volumes is Empty");
      return false;
    } else {
      let valid = true;
      content.value.volumes.forEach((volume) => {
        if (volume.volume === null || volume.volume === undefined) {
          console.log("Volume is Null or Undefined");
          valid = false;
          return false;
        } else {
          if (volume.volume < 0) {
            console.log("Volume is Empty");
            valid = false;
            return false;
          }
        }
        if (volume.chapter === null || volume.chapter === undefined) {
          console.log("Chapter is Null or Undefined");
          valid = false;
          return false;
        } else {
          if (volume.chapter < 0) {
            console.log("Chapter is Empty");
            valid = false;
            return false;
          }
        }
      });
      if (!valid) {
        return false;
      }
    }
  }

  // Validate Notes
  if (content.value.notes === null || content.value.notes === undefined) {
    console.log("Notes is Null or Undefined");
  } else {
    if (content.value.notes.length === 0) {
      console.log("Notes is Empty");
    } else {
      let valid = true;
      content.value.notes.forEach((note) => {
        if (note.volume === null || note.volume === undefined) {
          console.log("Volume is Null or Undefined");
          valid = false;
          return false;
        } else {
          if (note.volume.volume === null || note.volume.volume === undefined) {
            console.log("Volume is Null or Undefined");
            valid = false;
            return false;
          } else {
            if (note.volume.volume < 0) {
              console.log("Volume is Empty");
              valid = false;
              return false;
            }
          }
          if (
            note.volume.chapter === null ||
            note.volume.chapter === undefined
          ) {
            console.log("Chapter is Null or Undefined");
            valid = false;
            return false;
          } else {
            if (note.volume.chapter < 0) {
              console.log("Chapter is Empty");
              valid = false;
              return false;
            }
          }
        }
        if (note.note === null || note.note === undefined) {
          console.log("Note is Null or Undefined");
          valid = false;
          return false;
        } else {
          if (note.note === "") {
            console.log("Note is Empty");
            valid = false;
            return false;
          }
        }
      });
      if (!valid) {
        return false;
      }
    }
  }

  return true;
};

export const useArchiveCreate = async () => {
  const content = useArchiveContent();
  const valid = useArchiveValidate();

  content.value.time = {
    first: new Date().toISOString(),
    last: new Date().toISOString(),
  };

  if (!valid) {
    return;
  } else {
    const client = useSupabaseClient();
    const user = useSupabaseUser();

    content.value.time = {
      first: new Date().toISOString(),
      last: new Date().toISOString(),
    };
    content.value.uid = user.value?.id;

    const { data, error } = await client
      .from("content")
      .insert(content.value)
      .select();

    if (error) {
      console.log(error);
    } else {
      console.log(data);
      navigateTo("/");
    }
  }
};
