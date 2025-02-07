import pool from "../database.js";

export const getComments = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM comments");
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const getComment = async (req, res) => {
    const { id } = req.params;
    try {
        const [row] = await pool.query(
            "SELECT * FROM comments WHERE comment_id = ?",
            [id]
        );
        res.status(200).json(row);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const getByPostId = async (req, res) => {
    const { post_id } = req.query;
    try {
        const [rows] = await pool.query(
            "SELECT * FROM comments WHERE post_id = ?",
            [post_id]
        );
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const createComment = async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO comments (comment_id, post_id, user_id, content) VALUES (UUID(), ?, ?, ?)",
            [req.body.post_id, req.body.user_id, req.body.content]
        );
        res.status(200).json({ message: "Comment successfully created!" });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const updateComment = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('UPDATE comments SET content = ? WHERE comment_id = ?', [req.body.content, id]);
        res.status(200).json({ message: "Comment successfully updated!" });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

export const deleteComment = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM comments WHERE comment_id = ?', [id]);
        res.status(200).json({ message: "Comment successfully deleted!" });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}