import { ButtonIcon } from "@/Components";
import { Avatar, Box, Paper, Stack } from "@mui/material";
import { useRef } from "react";
import { FaPlusCircle } from "react-icons/fa";

interface PhotoUploadProps {
  photoPreview: string;
  onPhotoUpload: (file: File) => void;
}

export const PhotoUpload = ({
  photoPreview,
  onPhotoUpload,
}: PhotoUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File input triggered");
    const file = event.target.files?.[0];
    if (file) {
      console.log("File selected:", {
        name: file.name,
        type: file.type,
        size: file.size,
      });
      onPhotoUpload(file);
    } else {
      console.log("No file selected");
    }
    // Limpar o input para permitir selecionar o mesmo arquivo novamente
    event.target.value = "";
  };

  const handleButtonClick = () => {
    console.log("Button clicked, triggering file input");
    fileInputRef.current?.click();
  };

  return (
    <Stack
      display="flex"
      width="100%"
      height="50vh"
      alignContent="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Paper
          elevation={1}
          sx={{
            margin: "1rem 0",
            width: "13vw",
            height: "50%",
            boxShadow: "1",
            padding: "8px",
            borderRadius: "50%",
            bgcolor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            src={photoPreview}
            alt="Prévia da foto"
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            Sem Foto
          </Avatar>
        </Paper>

        <Stack marginTop="15px" spacing={2}>
          <ButtonIcon
            name="addFoto"
            type="button"
            label="Add Foto"
            icon={FaPlusCircle}
            onClick={handleButtonClick}
          />
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handlePhotoUpload}
          />
        </Stack>
      </Box>
    </Stack>
  );
};
