import { Server } from "socket.io";

interface ServerToClientEvents {
    boop: () => void;
}

interface ClientToServerEvents {
    beep: () => void;
}

// server with specific interfaces
const io = new Server<ClientToServerEvents, ServerToClientEvents>({
    // Allow access from anyone
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    // on connect say someone connected
    console.log("connected");

    // listen for a beep
    socket.on("beep", () => {
        // boop to everyone but person who sent
        socket.broadcast.emit("boop");
        console.log(socket.id + " booped!");
    });
});

// listen on port
io.listen(3000);
