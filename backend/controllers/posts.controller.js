import pool from "../database.js";

export const getPosts = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM posts");
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const getPost = async (req, res) => {
    const { id } = req.params;
    try {
        const [row] = await pool.query(
            "SELECT * FROM posts WHERE post_id = ?",
            [id]
        );
        res.status(200).json(row);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const getByUserId = async (req, res) => {
    const { user_id } = req.query;
    try {
        const [row] = await pool.query(
            "SELECT * FROM posts WHERE user_id = ?",
            [user_id]
        );
        res.status(200).json(row);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const createPost = async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO posts (post_id, user_id, is_reviewing, caption) VALUES (UUID(), ?, ?, ?)",
            [req.body.user_id, false, req.body.caption]
        );
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const likePost = async (req, res) => {
    const { user_id, post_id } = req.query;
    try {
        await pool.query(
            "UPDATE posts SET likes = COALESCE(likes, '[]') WHERE post_id = ?",
            [post_id]
        );

        await pool.query(
            "UPDATE posts SET likes = JSON_ARRAY_APPEND(likes, '$', ?) WHERE post_id = ?",
            [user_id, post_id]
        );

        res.status(200).json({ message: "Liked successfully" });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const updatePost = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query(
            "UPDATE posts SET caption = ? WHERE post_id = ?", [req.body.caption, id]
        )
        res.status(200).json({ message: 'Updated Successfully'});
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM posts WHERE post_id = ?', [id]);
        res.status(200).json({ message: 'Deleted Successfully'});
    } catch (err) {
        res.status(500).json({ message: err });
    }
}