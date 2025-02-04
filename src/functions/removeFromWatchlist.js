import Swal from "sweetalert2";
import { toast } from "react-toastify";

export const removeFromWatchlist = (id, setAdded, setMyWatchlist) => {
  Swal.fire({
    title: "Are you sure?",
    text: `Do you really want to remove ${id} from your watchlist?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, remove it!",
  }).then((result) => {
    if (result.isConfirmed) {
      let items = JSON.parse(localStorage.getItem("watchlist")) || [];

      const updatedList = items.filter((item) => item !== id);
      localStorage.setItem("watchlist", JSON.stringify(updatedList));

      setAdded(false); // Update the state of the individual item
      setMyWatchlist((prevList) => prevList.filter((coin) => coin.id !== id)); // Update the watchlist UI immediately

      toast.success(`${id} removed from the watchlist!`, { theme: "dark" });
    }
    else {
      setAdded(true); // Ensure the star remains highlighted when canceling
    }
  });
};



// import { toast } from "react-toastify";

// export const removeFromWatchlist = (id) => {
//   if (window.confirm("Are you sure you want to remove this coin")) {
//     let items = localStorage.getItem("watchlist");
//     let arr = JSON.parse(items);
//     localStorage.setItem(
//       "watchlist",
//       JSON.stringify(arr.filter((item) => item != id))
//     );
//     toast.success(
//       `${
//         id.slice(0, 1).toUpperCase() + id.slice(1)
//       } removed from the watchlist!`
//     );
//   } else {
//     toast.error("Couldnt remove the coin from the watchlist!");
//   }
// // };

// import Swal from "sweetalert2";
// import { toast } from "react-toastify";

// export const removeFromWatchlist = (id, setAdded) => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: `Do you really want to remove ${id} from your watchlist?`,
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#d33",
//     cancelButtonColor: "#3085d6",
//     confirmButtonText: "Yes, remove it!",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       let items = localStorage.getItem("watchlist");
//       let arr = JSON.parse(items) || [];

//       localStorage.setItem(
//         "watchlist",
//         JSON.stringify(arr.filter((item) => item !== id))
//       );

//       setAdded(false);
//       toast.success(`${id} removed from the watchlist!`, { theme: "dark" });
//     }
//   });
// };
