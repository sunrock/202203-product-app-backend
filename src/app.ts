import router from "./server";

const PORT: any = process.env.PORT || 3000;
router.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
});