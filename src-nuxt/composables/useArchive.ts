import { Record, Records } from "../../types/types";

export const useArchiveRecords = async () => {
  const archive = useState("archive", (): Records => []);

  const client = useSupabaseClient();
  const user = useSupabaseUser();

  const { data, error } = await client
    .from("records")
    .select("*")
    .eq("uid", user.value?.id);
  if (error) {
    console.log(error);
  } else {
    archive.value = data;
  }

  return archive;
};

export const useArchiveRecord = () => {
  const record = useState("record", (): Record => ({}));
  return record;
};

const useArchiveValidate = () => {
  const record = useArchiveRecord();

  // Validate Medium
  if (record.value.medium === null || record.value.medium === undefined) {
    console.log("Medium is Null or Undefined");
    return false;
  } else {
    if (record.value.medium === "") {
      console.log("Medium is Empty");
      return false;
    }
  }

  // Validate Title
  if (record.value.title === null || record.value.title === undefined) {
    console.log("Title is Null or Undefined");
    return false;
  } else {
    if (record.value.title === "") {
      console.log("Title is Empty");
      return false;
    }
  }

  // Validate Description
  if (
    record.value.description === null ||
    record.value.description === undefined
  ) {
    console.log("Description is Null or Undefined");
    return false;
  } else {
    if (record.value.description === "") {
      console.log("Description is Empty");
      return false;
    }
  }

  // Validate Genres
  if (record.value.genres === null || record.value.genres === undefined) {
    console.log("Genres is Null or Undefined");
    return false;
  } else {
    if (record.value.genres.length === 0) {
      console.log("Genres is Empty");
      return false;
    }
  }

  // Validate Status
  if (record.value.status === null || record.value.status === undefined) {
    console.log("Status is Null or Undefined");
    return false;
  } else {
    if (record.value.status === "") {
      console.log("Status is Empty");
      return false;
    }
  }

  // Validate Rating
  if (record.value.rating === null || record.value.rating === undefined) {
    console.log("Rating is Null or Undefined");
    return false;
  } else {
    if (record.value.rating < 0 || record.value.rating > 10) {
      console.log("Rating is Empty");
      return false;
    }
  }

  // Validate Volumes
  if (record.value.volumes === null || record.value.volumes === undefined) {
    console.log("Volumes is Null or Undefined");
    return false;
  } else {
    if (record.value.volumes.length === 0) {
      console.log("Volumes is Empty");
      return false;
    } else {
      let valid = true;
      record.value.volumes.forEach((volume) => {
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
  if (record.value.notes === null || record.value.notes === undefined) {
    console.log("Notes is Null or Undefined");
  } else {
    if (record.value.notes.length === 0) {
      console.log("Notes is Empty");
    } else {
      let valid = true;
      record.value.notes.forEach((note) => {
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
  const record = useArchiveRecord();
  const valid = useArchiveValidate();

  record.value.time = {
    first: new Date().toISOString(),
    last: new Date().toISOString(),
  };

  if (!valid) {
    return;
  } else {
    const client = useSupabaseClient();
    const user = useSupabaseUser();

    record.value.time = {
      first: new Date().toISOString(),
      last: new Date().toISOString(),
    };
    record.value.uid = user.value?.id;

    const { data, error } = await client
      .from("records")
      .insert([record.value] as never[])
      .select();

    if (error) {
      console.log(error);
    } else {
      console.log(data);
      navigateTo("/");
    }
  }
};
