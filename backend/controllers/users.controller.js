import pool from "../database.js";

export const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM users");
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const [row] = await pool.query(
            "SELECT * FROM users WHERE user_id = ?",
            [id]
        );
        res.status(200).json(row);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const getByUsername = async (req, res) => {
    const { username } = req.query;
    try {
        const [row] = await pool.query(
            "SELECT * FROM users WHERE username = ?",
            [username]
        );
        res.status(200).json(row);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const createUser = async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO users (user_id, username, email, password_hash) VALUES (UUID(), ?, ?, ?)",
            [req.body.username, req.body.email, req.body.password_hash]
        );
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const followUser = async (req, res) => {
    const { follower, following } = req.query;
    try {
        await pool.query("UPDATE users SET following = COALESCE(following, '[]') WHERE user_id = ?", [follower]);
        await pool.query("UPDATE users SET followers = COALESCE(followers, '[]') WHERE user_id = ?", [following]);

        await pool.query(
            "UPDATE users SET following = JSON_ARRAY_APPEND(following, '$', ?) WHERE user_id = ?",
            [following, follower]
        );
        await pool.query(
            "UPDATE users SET followers = JSON_ARRAY_APPEND(followers, '$', ?) WHERE user_id = ?",
            [follower, following]
        );

        res.status(200).json({ message: "Followed successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

export const resetPassword = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('UPDATE users SET password_hash = ? WHERE', [req.body.password_hash]);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM users WHERE user_id = ?", [id]);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}